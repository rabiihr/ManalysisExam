document.getElementById('button1').addEventListener('click', function() {
    toggleContent('content1');
});

document.getElementById('button2').addEventListener('click', function() {
    toggleContent('content2');
});

document.getElementById('button3').addEventListener('click', function() {
    toggleContent('content3');
});

function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}


