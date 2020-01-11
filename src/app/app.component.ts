import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'innopark';

  constructor(private http: HttpClient) {
    $(document).ready(function () {
      $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#sandles *").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          console.log(value)
        });
      });
    });
  }

}
