window.addEventListener('load', function(){
    var renderContent01 = function(data){

        var container = d3
            .select('#main-content')
            .selectAll('div')
            .data(data)
                .enter()
                .append('div')
        ;



        container
            .append('div')
            .attr('class', 'section-heading-spacer')
        ;

        var row = container
            .append('div')
            .attr('class', 'row')
        ;

        var col = row
            .append('div')
            .attr('class', 'col-lg-5 col-sm-6')
        ;

        var h2 = col
            .append('h2')
            .attr('class', 'section-heading')
            .text(function(d){ return d.title; })
        ;

        h2.filter(function(d, i){ return i == 0; })
            .style('display', 'flex')
            .style('align-items', 'center')
                .append('img')
                .attr('src', './img/name.svg')
                .style('margin-left', '20px')
                .style('max-height', '30px')
        ;
        

        col
            .selectAll('a')
            .data(function(d){ return d.urls })
            .enter()
                .append('a')
                .style('display', 'block')
                .style('font-size', '2rem')
                .style('text-decoration', 'none')
                .attr('href', function(d){ return d.href; })
                .text(function(d){ return d.text; })
        ;

        col
            .append('p')
            .attr('class', 'font18')
            .text(function(d){ return d.content; })
        ;

        row
            .append('div')
            .attr('class', 'col-md-6 col-sm-6 col-xs-12 d-flex justify-center align-center')
            .style('height', '50%')
            .style('border-style', 'solid')
            .style('border-radius', '10px')
            .style('border-width', '1px')
                .selectAll('div')
                .data(function(d){ return [d]; })
                .enter()
                    .append('div')
                    .attr('class', 'single_abouts wow fadeInRight d-flex justify-center align-center')
                    .style('height', '100%')
                    .attr('data-wow-duration', '1s')
                        .append('img')
                        .attr('src', function(d){ return './img/' + d.pic; })
                        .style('width', '100%')
                        .style('max-height', '100%')
                        .attr('alt', function(d){ return d.title; })
        ;



    };
    
    
    d3.request('./content.json')
        .responseType('json')
        .get(function(data){
            renderContent01(data.response);
        })
    ;

});