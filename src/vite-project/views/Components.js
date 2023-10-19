import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Components");
  }

  async getHtml() {
    return `
      <div class="wrapper flow">
        <h1>Components</h1>

        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est nesciunt, cum fugit veniam
          animi in
          modi perspiciatis? Aliquid officia eaque aliquam eveniet eum illum in nihil similique amet at.
        </p>

        <div class="card">
          <img src="images/background.jpg" alt="">
          <div class="card-body">
            at maiores fugit quam eum illo obcaecati temporibus laudantium earum dolore ab quis? Impedit
            illum praesentium eligendi?
          </div>
        </div>
        <div class="card-secondary">
          <img src="images/planets-collide-wide-wallpaper-22488.jpg" alt="">
          <div class="card-body">
            Quis saepe error consequatur dicta distinctio minima asperiores sunt? Consequuntur incidunt
            adipisci eius numquam omnis corporis qui ab! Magni incidunt, eius dignissimos placeat
            numquam ut cum reiciendis architecto minus soluta.
          </div>
        </div>

        <h1>Lorem ipsum dolor sit.</h1>
        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dolores commodi corporis
          incidunt veritatis suscipit.
        </h3>
        <p>
          Quis saepe error consequatur dicta distinctio minima asperiores sunt? Consequuntur incidunt
          adipisci
          eius numquam omnis corporis qui ab! Magni incidunt, eius dignissimos placeat numquam ut cum
          reiciendis architecto minus soluta.
          Unde possimus commodi impedit rem minus aut pariatur libero magni illum consequuntur id laborum
          aliquam, rerum accusantium fuga voluptate ipsa assumenda dolores ab maxime, et accusamus eius?
          Tempore, quod voluptatum!
        </p>


        <div class="card">
          <div class="card-header">
            Button
          </div>
          <div class="card-body">
            <div>
              <button>Blank button</button>
              <button class="primary">Primary Button</button>
              <button class="secondary">Secondary Button</button>
              <button class="default">Default Button</button>
            </div>
            <div>
              <button style="--_clr-icon-fg: var(--clr-body)">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                  <path
                    d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
                </svg>
                <span>Blank button</span>
              </button>
              <button class="primary">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                  <path
                    d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
                </svg>Primary Button</button>
              <button class="secondary">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                  <path
                    d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
                </svg>Secondary Button</button>
              <button class="default">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                  <path
                    d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
                </svg>Default Button</button>
            </div>

          </div>
          <div class="card-footer">
            foot
          </div>
        </div>

        <div class="card-secondary">
          <div class="card-header">
            Pagination
          </div>
          <div class="card-body">
            <div>
              Pagination:
              <div class="pagination">
                <ul>
                  <li class="mobile"><a href="#">1</a></li>
                  <li class="mobile"><a href="#">&Lang; </a></li>
                  <li class="mobile"><a href="#">&langle;</a></li>
                  <li><a href="#">6</a></li>
                  <li><a href="#">7</a></li>
                  <li class="mobile"><a class="active" href="#">8</a></li>
                  <li><a href="#">9</a></li>
                  <li><a href="#">10</a></li>
                  <li class="mobile"><a href="#">&rangle; </a></li>
                  <li class="mobile"><a href="#">&Rang;</a></li>
                  <li class="mobile"><a href="#">100</a></li>
                </ul>
              </div>
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
          <div class="card-footer">
            foot
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <table class="mobile-col-2 mobile-col-5 mobile-col-6" style="--_clr-icon-fg: var(--clr-accent);">
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
                <th>Header 4</th>
                <th>Header 5</th>
              </tr>
              <tr>
                <td>The husband is from etiosa local govet</td>
                <td>Wife is sandy</td>
                <td>Cell Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, iure
                  nostrum expedita id soluta, est eaque rem et, molestiae quas nesciunt aperiam
                  debitis eius earum ea ipsam laboriosam modi animi.</td>
                <td>Cell 4</td>
                <td>
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                    <path
                      d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
                  </svg>
                  <button>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                      <path
                        d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <td>The husband is from etiosa local govet</td>
                <td>Wife is sandy</td>
                <td>Cell Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, iure
                  nostrum expedita id soluta, est eaque rem et, molestiae quas nesciunt aperiam
                  debitis eius earum ea ipsam laboriosam modi animi.</td>
                <td>Cell 4</td>
                <td>
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                    <path
                      d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td>The husband is from etiosa local govet</td>
                <td>Wife is sandy</td>
                <td>Cell Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, iure
                  nostrum expedita id soluta, est eaque rem et, molestiae quas nesciunt aperiam
                  debitis eius earum ea ipsam laboriosam modi animi.</td>
                <td>Cell 4</td>
                <td>
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                    <path
                      d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td>The husband is from etiosa local govet</td>
                <td>Wife is sandy</td>
                <td>Cell Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, iure
                  nostrum expedita id soluta, est eaque rem et, molestiae quas nesciunt aperiam
                  debitis eius earum ea ipsam laboriosam modi animi.</td>
                <td>Cell 4</td>
                <td>
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                    <path
                      d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td>The husband is from etiosa local govet</td>
                <td>Wife is sandy</td>
                <td>Cell Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, iure
                  nostrum expedita id soluta, est eaque rem et, molestiae quas nesciunt aperiam
                  debitis eius earum ea ipsam laboriosam modi animi.</td>
                <td>Cell 4</td>
                <td>Cell 5</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="card-secondary">
          <div class="card-body">
            <table class="mobile-col-1-3">
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
                <th>Header 4</th>
                <th>Header 5</th>
              </tr>
              <tr>
                <td>The husband is from etiosa local govet</td>
                <td>Wife is sandy</td>
                <td>Cell Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, iure
                  nostrum expedita id soluta, est eaque rem et, molestiae quas nesciunt aperiam
                  debitis eius earum ea ipsam laboriosam modi animi.</td>
                <td>Cell 4</td>
                <td>Cell 5</td>
              </tr>
              <tr>
                <td>The husband is from etiosa local govet</td>
                <td>Wife is sandy</td>
                <td>Cell Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, iure
                  nostrum expedita id soluta, est eaque rem et, molestiae quas nesciunt aperiam
                  debitis eius earum ea ipsam laboriosam modi animi.</td>
                <td>Cell 4</td>
                <td>Cell 5</td>
              </tr>
              <tr>
                <td>The husband is from etiosa local govet</td>
                <td>Wife is sandy</td>
                <td>Cell Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, iure
                  nostrum expedita id soluta, est eaque rem et, molestiae quas nesciunt aperiam
                  debitis eius earum ea ipsam laboriosam modi animi.</td>
                <td>Cell 4</td>
                <td>Cell 5</td>
              </tr>
              <tr>
                <td>The husband is from etiosa local govet</td>
                <td>Wife is sandy</td>
                <td>Cell Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, iure
                  nostrum expedita id soluta, est eaque rem et, molestiae quas nesciunt aperiam
                  debitis eius earum ea ipsam laboriosam modi animi.</td>
                <td>Cell 4</td>
                <td>Cell 5</td>
              </tr>
              <tr>
                <td>The husband is from etiosa local govet</td>
                <td>Wife is sandy</td>
                <td>Cell Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, iure
                  nostrum expedita id soluta, est eaque rem et, molestiae quas nesciunt aperiam
                  debitis eius earum ea ipsam laboriosam modi animi.</td>
                <td>Cell 4</td>
                <td>Cell 5</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="card-secondary card-body">
          <div class="flex-group">
            <div class="card">
              <img src="" alt="" style="width: 100%; height: 200px; background-color: rgb(115, 84, 84);">
              <div class="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur incidunt sint quos ullam aliquid praesentium odit, nulla corrupti ratione
                perferendis! Porro aliquid quas, quisquam temporibus atque voluptatibus facere
                assumenda ullam!</div>
            </div>
            <div class="card-secondary">
              <div class="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                exercitationem, reiciendis excepturi fugit praesentium eum vel explicabo expedita
                accusamus debitis perferendis veritatis nisi! Repellat distinctio quas officiis?
                Explicabo, eos mollitia.</div>
              <img src="" alt="" style="width: 100%; height: 200px; background-color: rgb(115, 84, 84);">

            </div>
            <div class="card">
              <div class="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                voluptatum, amet alias dicta hic perferendis aliquid. </div>
              <img src="" alt="" style="width: 100%; height: 200px; background-color: rgb(115, 84, 84);">
              <div class="card-body">
                Accusantium, magni earum doloremque quibusdam odio, consequatur mollitia excepturi
                omnis enim libero assumenda! Corporis.</div>
            </div>
          </div>
        </div>

        <div class="card-secondary  card-body">
          <form action="/submit_form" method="POST">
            <div class="form-row">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required>
            </div>

            <div class="form-row">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required>
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
              <label for="comments">Comments of governors</label>
              <textarea id="comments" name="comments" rows="4" cols="40"></textarea>
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
              <div></div>
              <div>
                <button class="primary" type="submit">Submit</button>
                <button class="default" type="reset">Reset</button>
                <button class="secondary" type="button">Cancel</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    `
  }
}