/* feedreader.js
*
* This is the spec file that Jasmine will read and contains
* all of the tests that will be run against your application.
*/

$(function() {
    // Description Test suite name "RSS feeds"

    describe('RSS Feeds', function() {

        // Description To defined all feeds
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Description To check if all feeds have their url
        it('are defined with URL', function() {
            for (let id = 0; id < allFeeds.length; id++) {
                expect(allFeeds[id].url).toBeDefined();
                expect(allFeeds[id].url.length).not.toBe(0);
            }
        });

        // Description To check if all feeds have their names
        it('are defined with name', function() {
            for (let id = 0; id < allFeeds.length; id++) {
                expect(allFeeds[id].name).toBeDefined();
                expect(allFeeds[id].name.length).not.toBe(0);
            }
        });
    });


    // Description: Test suite named "The menu" for menubar/sidebar.

    describe('The menu', function() {

        // Description Checking the menubar visibility
        it('should hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        // Description Checking if menu is triggered or not
        it('is visible or not ?', function() {
            let menuIcon = $('.menu-icon-link');

            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    /* Description Test suite named "Initial Entries" for loading first feed. */

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            // Description load first feed
            loadFeed(0, function() {
                done();
            });
        });

        // Description Selected feed should contain a single entry
        it('must have at least a single entry', function() {
            expect($(".feed .entry").length).toBeGreaterThan(0);
        });

    });

    // Description Test suite named "New Feed Selection"

    describe('New Feed Selection', function() {
        var oldFeeds,
            newFeeds;

        // Description Selecting all old feeds to replace with new one
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeeds = $('.feed').html();
                loadFeed(1 ,done);
            });

        });

        // Description Load new feeds on first run
        it('has been loaded with new feeds', function() {
            // Description 'newFeeds' reserved for new feeds
            newFeeds = $(".feed").html();
            expect(newFeeds).not.toEqual(oldFeeds);
        });

    });

}());