document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').textContent = 'Yay! Spooky and sweet!';
    document.getElementById('response').style.display = 'block';
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('response').textContent = 'Aww, mixed signals but still cute!';
    document.getElementById('response').style.display = 'block';
});
