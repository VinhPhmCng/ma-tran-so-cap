var boxDimensions = [-8, 6, 6, -6];

const board = JXG.JSXGraph.initBoard(
    'vector2d',
    {
        boundingbox: boxDimensions,
        axis: true,
        showNavigation: false,
        showCopyright: true,
    },
);


var sliderX = board.create(
    'slider',
    [
        [-6.5, -3.5], 
        [-4.5, -3.5], 
        [-4, 1, 4],
    ],
    {
        name: 'x',
    },
);

var sliderY = board.create(
    'slider',
    [
        [-6.5, -4.5], 
        [-4.5, -4.5], 
        [-4, 1, 4],
    ],
    {
        name: 'y',
    },
);

var checkboxShowArrow = board.create(
    'checkbox',
    [-7, 5, 'Arrow / Point'],
);


var pointOrigin = board.create(
    'point',
    [0.0, 0.0],
    {
        name: 'O',
        fixed: true,
        size: 1,
    },
);

var pointVector = board.create(
    'point',
    [
        function() {return sliderX.Value();},
        function() {return sliderY.Value();},
    ],
    {
        name: '',
        visible: true,
    },
);

var arrowVector = board.create(
    'arrow',
    [pointOrigin, pointVector],
    {
        visible: false,
    },
);


JXG.addEvent(
    checkboxShowArrow.rendNodeCheckbox,
    'change',
    function() {
        if (this.Value()) {
            arrowVector.setAttribute({
                visible: true,
            });
            pointVector.setAttribute({
                visible: false,
            });
//            checkboxShowArrow.setLabelText("Display: Arrow");
        } else {
            arrowVector.setAttribute({
                visible: false,
            });
            pointVector.setAttribute({
                visible: true,
            });
//            checkboxShowArrow.setLabelText("Display: Point");
        }
    },
    checkboxShowArrow,
);


// Doesn't work - I don't know why lol
/* checkboxShowArrow.setAttribute({
    checked: true,
}); */