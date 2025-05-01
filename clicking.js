// reveals the content upon clicking
document.addEventListener('DOMContentLoaded', function () {
    // clickable imgs
    const click1 = document.getElementById('click1');
    const click2 = document.getElementById('click2');
    const click3 = document.getElementById('click3');
    const click4 = document.getElementById('click4');
    
    // content sections
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');
    const content3 = document.getElementById('content3');
    const content4 = document.getElementById('content4');
    
    // event handlers
    click1.addEventListener('click', function() {
      this.parentElement.style.display = 'none';
      content1.style.display = 'block';
      content1.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    
    click2.addEventListener('click', function() {
      this.parentElement.style.display = 'none';
      content2.style.display = 'block';
      content2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    
    click3.addEventListener('click', function() {
      this.parentElement.style.display = 'none';
      content3.style.display = 'block';
      content3.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    
    click4.addEventListener('click', function() {
      this.parentElement.style.display = 'none';
      content4.style.display = 'block';
      content4.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    
    document.querySelector('.clickable-image-container.right').style.display = 'block';
});


// graph toggling between 1 and 2
const graph1 = document.getElementById('graph1');
const graph2 = document.getElementById('graph2');
const graph1Text = document.getElementById('graph1-text');
const graph2Text = document.getElementById('graph2-text');
const imgClick = document.getElementById('click2-container');

  function toggleGraphs() {
    graph1.classList.toggle('active-graph');
    graph1.classList.toggle('graph-toggle');
    graph2.classList.toggle('active-graph');
    graph2.classList.toggle('graph-toggle');

    if (graph1.classList.contains('active-graph')) {
      graph1Text.style.display = 'block';
        graph2Text.style.display = 'none';
        imgClick.style.display = 'none';
    } else {
      graph1Text.style.display = 'none';
        graph2Text.style.display = 'block';
        imgClick.style.display = 'block';
    }
  }

  graph1.addEventListener('click', toggleGraphs);
  graph2.addEventListener('click', toggleGraphs);