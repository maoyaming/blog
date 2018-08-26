$(function() {
    $.fn.serializeToJson = function() {
        var formData = this.serializeArray();
        var obj = {};
        for (var i = 0; i < formData.length; i++) {
            obj[formData[i].name] = formData[i].value;
        }
        return obj;
    }
})