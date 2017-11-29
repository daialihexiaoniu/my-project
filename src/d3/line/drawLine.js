var Chart = function() {
    // set options for chart
   

    var _Chart = function (opts) {
        this.data = opts.data;
        this.element = opts.element;
        this.__init();
    }

    _Chart.prototype = {
        __init: function() {
            var _this = this
            //create the chart
            this.__draw();
            d3.select(window).on('resize', function () {
                _this.__draw()
            });
        },
        __draw: function() {
            this.width = this.element.offsetWidth;
            this.height = this.element.offsetHeight;
            this.margin = {
                top: 20,
                right: 75,
                bottom: 45,
                left: 50
            };

            // clear emelent when draw
            this.element.innerHTML = '';
            // set up svg
            var svg = d3.select(this.element)
                .append('svg')
                .attr('width', this.width)
                .attr('height', this.height);

            this.plat = svg.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

            // create other thing
            this.__createScales();
            this.__addAxes();
            this.__addLine(); 
        },
        __createScales: function() {
            var m = this.margin;

            //create max and min 
            var xExtent = d3.extent(this.data, function (d, i) {
                return d[0];
            })
            var yExtent = d3.extent(this.data, function (d, i) {
                return d[1];
            })

            if (yExtent[0] > 0) {
                yExtent[0] = 0;
            }

            // define xScale and yScale
            this.xScale = d3.scaleLinear()
                .range([0, this.width - m.right])
                .domain(xExtent);

            this.yScale = d3.scaleLinear()
                .range([this.height - (m.top + m.bottom), 0])
                .domain(yExtent);
        },
        __addAxes: function() {
            var m = this.margin;

            // create axis 
            var xAxis = d3.axisBottom().scale(this.xScale)
                .ticks();
            var yAxis = d3.axisLeft().scale(this.yScale);

            this.plat.append('g').call(xAxis)
                .attr('class', 'x-axis')
                .attr("transform", "translate(0," + (this.height - (m.top + m.bottom)) + ")");

            this.plat.append('g').call(yAxis)
                .attr('class', 'y-axis');
        },
        __addLine: function() {
            var _this = this;
            var line = d3.line()
                .x(function (d) {
                    return _this.xScale(d[0]);
                })
                .y(function (d) {
                    return _this.yScale(d[1]);
                })
                .curve(d3.curveMonotoneX);

            this.plat.append('path')
                .attr('class', 'line')
                .attr('d', line(_this.data))
                .style('fill', '#fff')
                .style('stroke', '#ccc')
        },
        setColor: function (newColor) {
            this.plat.select('.line').style('stroke', newColor);
        },
        setData: function (newData) {
            this.data = newData;
            this.__draw();
        },
        addCircle: function (classes) {
            var _this = this;
            _this.plat.selectAll('dot')
                .data(_this.data)
                .enter().append('circle')
                .attr('class', classes)
                .attr('r', 2)
                .attr('cx', function (d) {
                    return _this.xScale(d[0]);
                })
                .attr('cy', function (d) {
                    return _this.yScale(d[1]);
                });
        }
    }

    return _Chart;
}.call(this);
