import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contact");
    }

    async getHtml() {
        return `
            <div class="wrapper flow">
                <h1>Contact</h1>
                <div class="form-area">
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
                                <button type="reset">Reset</button>
                                <button class="secondary" type="button">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            `;
    }
}