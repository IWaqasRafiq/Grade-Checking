function calculatePercentage() {
    let percentage = parseInt(document.getElementById("percentage").value);
    let grade = "";
  
    
    if (percentage < 0) {
      grade = "Invalid Percentage, Must be between 0 and 100";
    } else if (percentage >= 0 && percentage < 50) {
      grade = "Sorry you are Failed, Prepare Your Self For Next Text";
    } else if (percentage >= 50 && percentage < 60) {
      grade = "You got C Grade,";
      
    } else if (percentage >= 60 && percentage < 70) {
      grade = "You got B Grade";
      
    } else if (percentage >= 70 && percentage < 80) {
      grade = " Congratulation, You got A Grade";
      
    } else if (percentage >= 80 && percentage <= 100) {
      grade = "Congratulation, You got A1 Grade";
      
    } else {
      grade = "Invalid percentage, must be between 0 and 100";
    }
    document.getElementById("grade").value = grade;
    
  }
  function calculateGrade() {
    let obtainedmarks = parseInt(document.getElementById("obtainedmarks").value);
    let totalmarks = parseInt(document.getElementById("totalmakrs").value);
    
    	if (obtainedmarks === "" || totalmarks === "") {
		alert("Please enter your ObtainedMarks and TotalMarks.");
		return;
	}

	let Percentage = (obtainedmarks / totalmarks)*100;

	document.getElementById("Percentage").value = Percentage.toFixed(2);
    
  }
