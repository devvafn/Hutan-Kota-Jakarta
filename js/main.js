function scrollytelling(selector){
  // using d3 for convenience
  var scrolly = d3.select(selector);
  var figure = scrolly.select(".graph");
  var article = scrolly.select("article");
  var step = article.selectAll(".step");
  var pagelegenda = figure.select(".page-legenda");
  var page0 = figure.select(".page-0");
  var page1 = figure.select(".page-1");
  var page2 = figure.select(".page-2");
  var page3 = figure.select(".page-3");
  var page4 = figure.select(".page-4");
  var page5 = figure.select(".page-5");
  var page6 = figure.select(".page-6");
  var page7 = figure.select(".page-7");
  var page8 = figure.select(".page-8");
  var page9 = figure.select(".page-9");
  var page10 = figure.select(".page-10");
  var page11 = figure.select(".page-11");
  var page12 = figure.select(".page-12");
  var page13 = figure.select(".page-13");
  var page14 = figure.select(".page-14");
  var page15 = figure.select(".page-15");
  var page16 = figure.select(".page-16");
  var page17 = figure.select(".page-17");
  var page18 = figure.select(".page-18");
  var page19 = figure.select(".page-19");
  var page20 = figure.select(".page-20");
  var page21 = figure.select(".page-21");
  

  // initialize the scrollama
  var scroller = scrollama();

  // generic window resize listener event
  function handleResize() {
    // 1. update height of step elements
    var stepH = Math.floor(window.innerHeight);
    step.style("height", stepH + "px");

    var figureHeight = window.innerHeight;
    var figureMarginTop = (window.innerHeight - figureHeight) / 2;

    figure
      .style("height", figureHeight + "px")
      .style("top", figureMarginTop + "px");

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
  }

  // scrollama event handlers
  function handleStepEnter(response) {
    //console.log(response);
    // response = { element, direction, index }

    // add color to current step only
    step.classed("is-active", function(d, i) {
      return i === response.index;
    });

    // update graphic based on step

    let a = response.index
    console.log(a)
    if (a == 0) {
      pagelegenda.style("opacity",1);
      page0.style("opacity",1);
      page1.style("opacity",0);
      page2.style("opacity",0);
      page3.style("opacity",0);
      page4.style("opacity",0);
      page5.style("opacity",0);
      page6.style("opacity",0);
      page7.style("opacity",0);
      page8.style("opacity",0);
      page9.style("opacity",0);
      page10.style("opacity",0);
      page11.style("opacity",0);
      page12.style("opacity",0);
      page13.style("opacity",0);
      page14.style("opacity",0);
      page15.style("opacity",0);
      page16.style("opacity",0);
      page17.style("opacity",0);
      page18.style("opacity",0);
      page19.style("opacity",0);
      page20.style("opacity",0);
      page21.style("opacity",0);
    } else if (a == 1) {
      page0.style("opacity",1);
      page1.style("opacity",1);
      page2.style("opacity",0);
      page3.style("opacity",0);
      page4.style("opacity",0);
      page5.style("opacity",0);
      page6.style("opacity",0);
      page7.style("opacity",0);
      page8.style("opacity",0);
      page9.style("opacity",0);
      page10.style("opacity",0);
      page11.style("opacity",0);
      page12.style("opacity",0);
      page13.style("opacity",0);
      page14.style("opacity",0);
      page15.style("opacity",0);
      page16.style("opacity",0);
      page17.style("opacity",0);
      page18.style("opacity",0);
      page19.style("opacity",0);
      page20.style("opacity",0);
      page21.style("opacity",0);
    } else if (a == 2) {
      page0.style("opacity",0);
      page1.style("opacity",0);
      page2.style("opacity",1);
      page3.style("opacity",1);
      page4.style("opacity",0);
      page5.style("opacity",0);
      page6.style("opacity",0);
      page7.style("opacity",0);
      page8.style("opacity",0);
      page9.style("opacity",0);
      page10.style("opacity",0);
      page11.style("opacity",0);
      page12.style("opacity",0);
      page13.style("opacity",0);
      page14.style("opacity",0);
      page15.style("opacity",0);
      page16.style("opacity",0);
      page17.style("opacity",0);
      page18.style("opacity",0);
      page19.style("opacity",0);
      page20.style("opacity",0);
      page21.style("opacity",0);
    } else if (a == 3) {
      page0.style("opacity",0);
      page1.style("opacity",0);
      page2.style("opacity",1);
      page3.style("opacity",1);
      page4.style("opacity",1);
      page5.style("opacity",1);
      page6.style("opacity",0);
      page7.style("opacity",0);
      page8.style("opacity",0);
      page9.style("opacity",0);
      page10.style("opacity",0);
      page11.style("opacity",0);
      page12.style("opacity",0);
      page13.style("opacity",0);
      page14.style("opacity",0);
      page15.style("opacity",0);
      page16.style("opacity",0);
      page17.style("opacity",0);
      page18.style("opacity",0);
      page19.style("opacity",0);
      page20.style("opacity",0);
      page21.style("opacity",0);
    } else if (a == 4) {
      page0.style("opacity",0);
      page1.style("opacity",0);
      page2.style("opacity",0);
      page3.style("opacity",0);
      page4.style("opacity",0);
      page5.style("opacity",0);
      page6.style("opacity",1);
      page7.style("opacity",1);
      page8.style("opacity",0);
      page9.style("opacity",0);
      page10.style("opacity",0);
      page11.style("opacity",0);
      page12.style("opacity",0);
      page13.style("opacity",0);
      page14.style("opacity",0);
      page15.style("opacity",0);
      page16.style("opacity",0);
      page17.style("opacity",0);
      page18.style("opacity",0);
      page19.style("opacity",0);
      page20.style("opacity",0);
      page21.style("opacity",0);
    }
    else if (a == 5) {
      page0.style("opacity",0);
      page1.style("opacity",0);
      page2.style("opacity",0);
      page3.style("opacity",0);
      page4.style("opacity",0);
      page5.style("opacity",0);
      page6.style("opacity",1);
      page7.style("opacity",1);
      page8.style("opacity",1);
      page9.style("opacity",1);
      page10.style("opacity",0);
      page11.style("opacity",0);
      page12.style("opacity",0);
      page13.style("opacity",0);
      page14.style("opacity",0);
      page15.style("opacity",0);
      page16.style("opacity",0);
      page17.style("opacity",0);
      page18.style("opacity",0);
      page19.style("opacity",0);
      page20.style("opacity",0);
      page21.style("opacity",0);
    }
    else if (a == 6) {
      page0.style("opacity",0);
      page1.style("opacity",0);
      page2.style("opacity",0);
      page3.style("opacity",0);
      page4.style("opacity",0);
      page5.style("opacity",0);
      page6.style("opacity",0);
      page7.style("opacity",0);
      page8.style("opacity",0);
      page9.style("opacity",0);
      page10.style("opacity",1);
      page11.style("opacity",1);
      page12.style("opacity",0);
      page13.style("opacity",0);
      page14.style("opacity",0);
      page15.style("opacity",0);
      page16.style("opacity",0);
      page17.style("opacity",0);
      page18.style("opacity",0);
      page19.style("opacity",0);
      page20.style("opacity",0);
      page21.style("opacity",0);
    }
    else if (a == 7) {
      page0.style("opacity",0);
      page1.style("opacity",0);
      page2.style("opacity",0);
      page3.style("opacity",0);
      page4.style("opacity",0);
      page5.style("opacity",0);
      page6.style("opacity",0);
      page7.style("opacity",0);
      page8.style("opacity",0);
      page9.style("opacity",0);
      page10.style("opacity",1);
      page11.style("opacity",1);
      page12.style("opacity",1);
      page13.style("opacity",1);
      page14.style("opacity",0);
      page15.style("opacity",0);
      page16.style("opacity",0);
      page17.style("opacity",0);
      page18.style("opacity",0);
      page19.style("opacity",0);
      page20.style("opacity",0);
      page21.style("opacity",0);
    }
    else if (a == 8) {
      page0.style("opacity",0);
      page1.style("opacity",0);
      page2.style("opacity",0);
      page3.style("opacity",0);
      page4.style("opacity",0);
      page5.style("opacity",0);
      page6.style("opacity",0);
      page7.style("opacity",0);
      page8.style("opacity",0);
      page9.style("opacity",0);
      page10.style("opacity",0);
      page11.style("opacity",0);
      page12.style("opacity",0);
      page13.style("opacity",0);
      page14.style("opacity",1);
      page15.style("opacity",1);
      page16.style("opacity",0);
      page17.style("opacity",0);
      page18.style("opacity",0);
      page19.style("opacity",0);
      page20.style("opacity",0);
      page21.style("opacity",0);
    }
    else if (a == 9) {
      page0.style("opacity",0);
      page1.style("opacity",0);
      page2.style("opacity",0);
      page3.style("opacity",0);
      page4.style("opacity",0);
      page5.style("opacity",0);
      page6.style("opacity",0);
      page7.style("opacity",0);
      page8.style("opacity",0);
      page9.style("opacity",0);
      page10.style("opacity",0);
      page11.style("opacity",0);
      page12.style("opacity",0);
      page13.style("opacity",0);
      page14.style("opacity",1);
      page15.style("opacity",1);
      page16.style("opacity",1);
      page17.style("opacity",1);
      page18.style("opacity",0);
      page19.style("opacity",0);
      page20.style("opacity",0);
      page21.style("opacity",0);
    }
    else if (a == 10) {
      page0.style("opacity",0);
      page1.style("opacity",0);
      page2.style("opacity",0);
      page3.style("opacity",0);
      page4.style("opacity",0);
      page5.style("opacity",0);
      page6.style("opacity",0);
      page7.style("opacity",0);
      page8.style("opacity",0);
      page9.style("opacity",0);
      page10.style("opacity",0);
      page11.style("opacity",0);
      page12.style("opacity",0);
      page13.style("opacity",0);
      page14.style("opacity",0);
      page15.style("opacity",0);
      page16.style("opacity",0);
      page17.style("opacity",0);
      page18.style("opacity",1);
      page19.style("opacity",1);
      page20.style("opacity",0);
      page21.style("opacity",0);
    }
    else if (a == 11) {
      page0.style("opacity",0);
      page1.style("opacity",0);
      page2.style("opacity",0);
      page3.style("opacity",0);
      page4.style("opacity",0);
      page5.style("opacity",0);
      page6.style("opacity",0);
      page7.style("opacity",0);
      page8.style("opacity",0);
      page9.style("opacity",0);
      page10.style("opacity",0);
      page11.style("opacity",0);
      page12.style("opacity",0);
      page13.style("opacity",0);
      page14.style("opacity",0);
      page15.style("opacity",0);
      page16.style("opacity",0);
      page17.style("opacity",0);
      page18.style("opacity",1);
      page19.style("opacity",1);
      page20.style("opacity",1);
      page21.style("opacity",1);
    }
  }

  function init() {
    //setupStickyfill(); Tidak perlu dipakai
  
    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize();
  
    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller
      .setup({
        step: "article .step",
        offset: 0.8,
        debug: false,
        progress: true
      })
      .onStepEnter(handleStepEnter);
  
    // setup resize event
    window.addEventListener("resize", handleResize);
  }
  
  // kick things off
  init();
}

var lingk = d3.select('.button1')
var sosek = d3.select('.button2')

var clingk = d3.select('#div1')
var csosek = d3.select('#div2')

csosek.style("display", "none")

lingk
  .on("click", lingkclick)

sosek
  .on("click", sosekclick)

function lingkclick() {
  clingk.style("display", "block")
  csosek.style("display", "none")
}

function sosekclick() {
  csosek.style("display", "block")
  clingk.style("display", "none")
}



/* Tidak perlu dipakai
function setupStickyfill() {
  d3.selectAll(".sticky").each(function() {
    Stickyfill.add(this);
  });
}
*/


scrollytelling("#scrolly-1");
scrollytelling("#scrolly-2");