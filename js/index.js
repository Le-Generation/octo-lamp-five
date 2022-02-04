window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start')
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block'
    start.style.display = 'none'
  })

  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'What is the name of the 12th month in a year?',
      o: ['December', 'March', 'May', 'November'],
      a: 0,
    },
    {
      q: 'Who is the priminister of Australia in 2022',
      o: ['Kelvin Rud', 'Julia Guilard', 'Scott Morrison', 'John Howard'],
      a: 2,
    },
  ]

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap')
    let quizDisplay = ''
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`
      quizWrap.innerHTML = quizDisplay
    })
  }

  // Calculate the score
  const calculateScore = () => {
    let score = 0
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`
        let r = `radio_${index}_${i}`
        liElement = document.querySelector('#' + li)
        radioElement = document.querySelector('#' + r)

        if (quizItem.a == i) {
          //change background color of li element here
          liElement.style.background = 'pink'
        }

        if (radioElement.checked) {
          // code for task 1 goes here
          if (quizItem.a == i) {
            score += 1
          }
        }
      }
      document.querySelector('#score').innerHTML = 'YOU SCORED: ' + score
    })
  }

  // call the displayQuiz function
  displayQuiz()

  // Add a submit button to calculate score
  btnSubmit.addEventListener('click', calculateScore)

  //Add a reset button
  btnReset.addEventListener('click', refreshed)
  function refreshed() {
    displayQuiz()
    window.location.href = './index.html'
  }

  //Add a countdown timer
  document.getElementById('time').innerHTML = 01 + ':' + 02
  startTimer()
  function startTimer() {
    var presentTime = document.getElementById('time').innerHTML
    var timeArray = presentTime.split(/[:]+/)
    var minutes = timeArray[0]
    var seconds = checkSecond(timeArray[1] - 1)
    if (seconds == 59) {
      minutes = minutes - 1
    }
    if (minutes < 0) {
      btnSubmit.click()
      return
    }
    document.getElementById('time').innerHTML = minutes + ':' + seconds
    console.log(minutes)
    setTimeout(startTimer, 1000)
  }
  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {
      sec = '0' + sec
    }
    if (sec < 0) {
      sec = '59'
    }
    return sec
  }
})

