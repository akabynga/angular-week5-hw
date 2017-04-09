/**
 * Created by Dmitriy on 09.04.2017.
 */
describe('Favorite item', function () {
    var $httpBackend;
    var ApiPath;
    var menuService;


    beforeEach(function () {
        module('common');
        console.log(1);
        inject(function ($injector) {
            console.log($injector);
            menuService = $injector.get('MenuService');
            $httpBackend = $injector.get('$httpBackend');
            ApiPath = $injector.get('ApiPath');
        });
    });

    it('should return categories list', function () {
        var original = {
            "id": 2,
            "short_name": "A2",
            "name": "Egg Drop Soup",
            "description": "chicken broth with egg drop",
            "price_small": 2.25,
            "price_large": 4.5,
            "small_portion_name": "pint",
            "large_portion_name": "quart",
            "created_at": "2017-04-05T20:15:48.292Z",
            "updated_at": "2017-04-05T20:15:48.292Z",
            "category_short_name": "A",
            "image_present": true
        };
        $httpBackend.whenGET(ApiPath + '/menu_items/A2.json').respond(original);
        menuService.getMenuItem('A2').then(function (response) {
            expect(response).toEqual(original);
        });
        $httpBackend.flush();
    });


});




