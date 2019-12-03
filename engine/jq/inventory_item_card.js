$(document).ready( function() {
        $("#canvasInventoryHelmSlot").mouseenter( function () {
                $('#canvasItemHoverCard').show();  
                $("#canvasItemHoverCard").css({"top" : $("#canvasInventoryHelmSlot").css("top") + 64,
                                               "left" : $("#canvasInventoryHelmSlot").css("left") + 64});
        })
        $("#canvasInventoryHelmSlot").mouseleave( function () {                                              
                $('#canvasItemHoverCard').hide();                  
        })
});