var ele = document.getElementById('one');
console.log(ele);

ele.addEventListener('mouseover',() => {
    ele.innerText = 'New content';
    ele.style.height = '200px';
    ele.style.width = '200px';
    ele.style.backgroundColor = 'gray';
});
ele.addEventListener('mouseout',() => {
    ele.innerText = 'New content';
    ele.style.height = '200px';
    ele.style.width = '200px';
    ele.style.backgroundColor = 'blue';
});

