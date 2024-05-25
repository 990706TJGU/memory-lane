function submitForm() {
    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;
    const q4 = document.getElementById('q4').value;

    console.log('Question 1:', q1);
    console.log('Question 2:', q2);
    console.log('Question 3:', q3);
    console.log('Question 4:', q4);

    alert('Thank you for sharing your memories!');

    // Example: Change image and music based on inputs (simplified logic)
    if (q1 || q2 || q3 || q4) {
        document.getElementById('memory-image').src = 'image2.jpg'; // Change to another image
        document.getElementById('memory-audio').src = 'music2.mp3'; // Change to another music
    }
}
