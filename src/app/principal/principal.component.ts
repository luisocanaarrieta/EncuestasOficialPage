import { Component,ViewChild} from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  isQuestionCardShow: boolean = false;
  totalAnswered: number = 0;
	rightAnswer: number=0;
  @ViewChild('submitModal') submitModal: any;
  Next=0;
  Siguiente(){
    this.Next+=1;
  }

  Retroceder(){
    this.Next-=1;
  }

  allQuestions: any = [{
    "id": 1,
    "question": "What is the capital of Belgium?",
    "a": "Vienna",
    "b": "Berlin",
    "c": "Brussels",
    "d": "Prague",
    "answer": "c"
  },
  {
    "id": 2,
    "question": "What is the capital of Australia?",
    "a": "Vienna",
    "b": "Canberra",
    "c": "Brussels",
    "d": "Prague",
    "answer": "b"
  },
  {
    "id": 3,
    "question": "What is the capital of Bulgaria?",
    "a": "Vienna",
    "b": "Sofia",
    "c": "Brussels",
    "d": "Prague",
    "answer": "b"
  }
  ];

  submitTest() {
    this.rightAnswer = 0;
    this.totalAnswered = 0;
    for (let i = 0; i < this.allQuestions.length; i++) {
      if ("selected" in this.allQuestions[i] && (this.allQuestions[i]["selected"] != null)) {
        this.totalAnswered++;
        if (this.allQuestions[i]["selected"] == this.allQuestions[i]["answer"]) {
          this.rightAnswer++;
        }
      }

    }
    this.submitModal.show();

  }

  startQuiz() {
    for (let i = 0; i < this.allQuestions.length; i++) {
      if ("selected" in this.allQuestions[i]) {
        delete this.allQuestions[i]["selected"];
      }

    }
    //this.questionTest.reset();
    this.isQuestionCardShow = true;

  }
}
