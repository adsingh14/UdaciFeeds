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

        it('must have at least a single entry', function() {
            // Description Entry contained feed(s)
            expect($('.entry .feed')).toBeDefined();
        });

    });

    // Description Test suite named "New Feed Selection"

    describe('New Feed Selection', function() {
        let oldEntries,
            newEntries;

        beforeEach(function(done) {
            // Description Remove all feeds of selected entry
            $('.feed').empty();

            // Description Selecting all old feeds
            loadFeed(1, function() {
                oldEntries = $('.feed').find(allFeeds.url);
                done();
            });

            // Description Selecting all new feeds
            loadFeed(0, function() {
                newEntries = $('.feed').find(allFeeds.url);
                done();
            });
        });

        // Description Load new feed on first run
        it('has loaded new feed on first run', function() {
            expect(newEntries).not.toBe(oldEntries);
        });

    });

}());