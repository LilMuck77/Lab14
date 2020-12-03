$(document).ready(
    function () {
        $("#calculateGrade").click(calculateGrade);
        $("#addStudent").click(addStudent);
        $("#sortByName").click(namesAreSorted);
        //$("#sortByPercent").click(percentSorted);

        var studentList = [];



        function calculateGrade(event) {
            event.preventDefault();

            //parse string into number. Couldn't figure out if you could do this in the object.
            var pointsEarned = $("#pointsEarned").val();
            pointsEarned = parseFloat(pointsEarned);
            var pointsPossible = $("#pointsPossible").val();
            pointsPossible = parseFloat(pointsPossible);

            //student object

            var student = {

                //pointsEarned: $("#pointsEarned").val(),
                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                percentage: (pointsEarned / pointsPossible) * 100,
                sortNames: function (n1,n2){if (n1.lastName < n2.lastName)
                    return -1;

                else if (n1.lastName > n2.lastName)
                    return 1;

                else
                    return 0;

                }



            };
            var fullName = student.firstName + " " + student.lastName;
            studentList.push(student);

            //Was trying to get the outputd to be together but there is a gap.
            $("#output").html(`Student Name: ${fullName} <br>
              Percent on test: ${student.percentage.toFixed()}%`);

            if (student.percentage < 60) {
                //F Grade
                $("#grade").text("You Flunked!");
            } else if (student.percentage <= 70) {
                //D Grade
                $("#grade").text("You got a D! What are you doing?");
            } else if (student.percentage <= 80) {
                //C Grade
                $("#grade").text("You got a C. Study more.");
            } else if (student.percentage <= 90) {
                //B Grade
                $("#grade").text("You got a B. Keep up the good work.");
            } else if (student.percentage > 90) {
                //A Grade
                $("#grade").text("You got an A. Awesome job! ");
            }

        }

        function addStudent() {

            //this was going to reset my input fields but it resets the whole form I think.
            $("#myForm")[0].reset();

        }

        // function sortNames(n1, n2) {
        //
        //     //
        //     // if (n1.lastName < n2.lastName)
        //     //     return -1;
        //     //
        //     // else if (n1.lastName > n2.lastName)
        //     //     return 1;
        //     //
        //     // else
        //     //     return 0;
        //
        //
        //     // namesAreSorted();
        // }

        function namesAreSorted(event) {
            event.preventDefault();
            studentList.sort();
            //wont print out names
            $("#sortedArrayOutput").text(studentList);

        }
    });