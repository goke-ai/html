import AbstractView from './AbstractView.js';
import db from '../data/db.json'

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("People");
    this.data = db.people;
    this.item = {};
    this.self = this;
  }

  async onloaded() {
    this.add();
    this.save();
    this.cancel();

    // edit
    document.querySelectorAll('.btnEdit').forEach((q) => {
      q.addEventListener('click', (e) => {
        let p = JSON.parse(q.getAttribute('data-value'));
        console.log(p);

        this.item = p;
        //callback.innerHTML = await this.getHtml();

        document.getElementById('btnSave').textContent = "Update";
        document.querySelector('.overlay').style.display = "block";

        document.getElementById('id').value = this.item.id;
        document.getElementById('surname').value = this.item.surname;
        document.getElementById('firstname').value = this.item.firstname;
        document.getElementById('email').value = this.item.email;
        if (this.item.gender == 1) {
          document.getElementById('male').checked = true;
        }
        else if (this.item.gender == 2) {
          document.getElementById('female').checked = true;
        } else {

        }
        // const myForm = document.querySelector('form');
        // myForm.gender.value = this.item.gender == 1 ? 'male' : 'female';

      });
    });

    // delete
    document.querySelectorAll('.btnDelete').forEach((q) => {
      q.addEventListener('click', (e) => {
        let p = JSON.parse(q.getAttribute('data-value'));
        console.log(p);

        this.item = p;
        // callback();

        document.getElementById('btnSave').textContent = "Delete";
        document.querySelector('.overlay').style.display = "block";

      });
    });
  }

  add() {
    document.getElementById('btnAdd')
      .addEventListener('click', (e) => {
        this.item = {};
        document.getElementById('btnSave').textContent = "Save";
        document.querySelector('.overlay').style.display = "block";
      });
  }

  save() {
    document.getElementById('btnSave')
      .addEventListener('click', (e) => {
        alert("Form saved!");
        document.querySelector('.overlay').style.display = "none";
        e.target.textContent = "Save"

      });
  }

  cancel() {
    document.getElementById('btnCancel').addEventListener('click', (e) => {
      document.querySelector('.overlay').style.display = "none";
    });
  }

  async getHtml() {
    return `
      <div class="wrapper flow">
        <h1>People</h1>

        <div class="new-area">
          <div class="card">
            <div class="card-body">
              <div>
                <button class="primary" id="btnAdd">
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                    <path
                      d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
                  </svg>
                  <span>Add New Person</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="grid-area">
          <div class="card">
            <div class="card-body">
            <table class="mobile-col-2 mobile-col-5 mobile-col-6">
              <tr>
                <th>Id</th>
                <th>Surname</th>
                <th>Firstname</th>
                <th>Gender</th>
                <th></th>
              </tr>
              ${this.data.map((v, i) =>
      `
              <tr>
                <td>${v.id}</td>
                <td>${v.surname}</td>
                <td>${v.firstname}</td>
                <td>${v.gender}</td>
                <td>
                  <button class="btnEdit | primary" title="edit" data-value='${JSON.stringify(v)}'>
                    <svg class="icon">
                      <use xlink:href="images/icons.svg#pencil-solid"></use>
                    </svg>
                  </button>
                  <button class="btnDelete | default" title="delete" data-value='${JSON.stringify(v)}'>
                    <svg class="icon">
                      <use xlink:href="images/icons.svg#trash-solid"></use>
                    </svg>
                  </button>
                </td>
              </tr>
              `
    ).join("")
      }
            </table>
            <div class="pagination">
                <ul>
                  <li class="mobile"><a href="#">1</a></li>
                  <li class="mobile"><a href="#">&Lang; </a></li>
                  <li class="mobile"><a href="#">&langle;</a></li>
                  <li><a class="active" style="--radius: 1vh" href="#">6</a></li>
                  <li><a href="#">7</a></li>
                  <li class="mobile"><a class="active" style="--radius: 50vh" href="#">8</a></li>
                  <li><a href="#">9</a></li>
                  <li><a class="active" style="--radius: 0.5rem" href="#">10</a></li>
                  <li class="mobile"><a href="#">&rangle; </a></li>
                  <li class="mobile"><a href="#">&Rang;</a></li>
                  <li class="mobile"><a href="#">100</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="form-area">
          <div class="overlay">
            <div class="overlay-content">
              <div class="edit">
                <div class="card-secondary  card-body">
                  <form action="#" method="POST">

                    <div class="form-row">
                      <label for="id">Id</label>
                      <input type="number" id="id" name="id" value=${this.item.id} required>
                    </div>

                    <div class="form-row">
                      <label for="surname">Surname</label>
                      <input type="text" id="surname" name="surname" ${this.item.surname} required>
                    </div>

                    <div class="form-row">
                      <label for="firstname">Firstname</label>
                      <input type="text" id="firstname" name="firstname" ${this.item.firstname} required>
                    </div>

                    <div class="form-row">
                      <label for="email">Email</label>
                      <input type="email" id="email" name="email" ${this.item.email} required>
                    </div>

                    <div class="form-row">
                      <label>Gender</label>
                      <div class="form-row-col-2">
                        <div>
                          <input type="radio" id="male" name="gender" value="male" required>
                          <label for="male">Male</label>
                        </div>
                        <div>
                          <input type="radio" id="female" name="gender" value="female" required>
                          <label for="female">Female</label>
                        </div>
                      </div>
                    </div>

                    <div class="form-row">
                      <label>Interests</label>
                      <div class="form-row-col-2">
                        <div>
                          <input type="checkbox" id="reading" name="interests" value="reading">
                          <label for="reading">Reading</label>
                        </div>
                        <div>
                          <input type="checkbox" id="gaming" name="interests" value="gaming">
                          <label for="gaming">Gaming</label>
                        </div>
                        <div> <input type="checkbox" id="cooking" name="interests" value="cooking">
                          <label for="cooking">Cooking</label>
                        </div>
                      </div>
                    </div>

                    <div class="form-row">
                      <label for="country">Country</label>
                      <select id="country" name="country">
                        <option value="usa">USA</option>
                        <option value="canada">Canada</option>
                        <option value="uk">UK</option>
                        <option value="germany">Germany</option>
                        <option value="australia">Australia</option>
                        <!-- Add more options as needed -->
                      </select>
                    </div>

                    <div class="form-row">
                      <label for="comments">Comments</label>
                      <textarea id="comments" name="comments" rows="4" cols="40"></textarea>
                    </div>

                    <div class="form-row">
                      <div></div>
                      <div>
                        <button id="btnSave" class="primary" type="submit">Save</button>
                        <button id="btnReset" class="default" type="reset">Reset</button>
                        <button id="btnCancel" class="secondary" type="button">Cancel</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}