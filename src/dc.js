var dc = (function(dc) {

    var DaisyChain = function(data) {
        this.data = data;

        /**
         * Test whether the supplied item is an array
         * @param item
         */
        this.isArray = function(item) {
            return Object.prototype.toString.call( item ) === '[object Array]';
        };

        /**
         * Test whether the supplied item is a string
         * @param item
         */
        this.isString = function(item) {
            return typeof item === 'string';
        };

        /**
         * Test whether the supplied item is a number
         * @param item
         */
        this.isNumber = function(item) {
            return typeof item === 'number';
        };

    };

    dc = function(data) {
        return new DaisyChain(data);
    };

    return dc;

})(dc);