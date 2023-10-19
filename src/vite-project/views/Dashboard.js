import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <div class="wrapper flow">
          <h1>Home</h1>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est nesciunt, cum fugit veniam
            animi in
            modi perspiciatis? Aliquid officia eaque aliquam eveniet eum illum in nihil similique amet at.
            Et blanditiis eveniet neque quos quis odio ipsam suscipit, autem illo necessitatibus laudantium,
            fugit eligendi consectetur sit sapiente ab fuga facere numquam nemo enim mollitia vero! Neque
            corporis quisquam ex.
            Quis ex est officiis porro laboriosam voluptatem numquam incidunt cumque. Doloremque aliquid
            odio. </p>

          <div class="card">
            <img src="/images/background.jpg" alt="">
            <div class="card-body">
              at maiores fugit quam eum illo obcaecati temporibus laudantium earum dolore ab quis? Impedit
              illum praesentium eligendi?
            </div>
          </div>
          <div class="card-secondary">
            <img src="/images/planets-collide-wide-wallpaper-22488.jpg" alt="">
            <div class="card-body">
              Quis saepe error consequatur dicta distinctio minima asperiores sunt? Consequuntur incidunt
              adipisci eius numquam omnis corporis qui ab! Magni incidunt, eius dignissimos placeat
              numquam ut cum reiciendis architecto minus soluta.
            </div>
          </div>
          <div class="card">

            <div class="card-body">
              Unde possimus commodi impedit rem minus aut pariatur libero magni illum consequuntur id
              laborum
              aliquam, rerum accusantium fuga voluptate ipsa assumenda dolores ab maxime, et accusamus
              eius?
              Tempore, quod voluptatum!
            </div>
          </div>

          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est nesciunt, cum fugit veniam
            animi in
            modi perspiciatis? Aliquid officia eaque aliquam eveniet eum illum in nihil similique amet at.
            Et blanditiis eveniet neque quos quis odio ipsam suscipit, autem illo necessitatibus laudantium,
            fugit eligendi consectetur sit sapiente ab fuga facere numquam nemo enim mollitia vero! Neque
            corporis quisquam ex.
            Quis ex est officiis porro laboriosam voluptatem numquam incidunt cumque. Doloremque aliquid
            odio,
            at maiores fugit quam eum illo obcaecati temporibus laudantium earum dolore ab quis? Impedit
            illum
            praesentium eligendi?
            Quis saepe error consequatur dicta distinctio minima asperiores sunt? Consequuntur incidunt
            adipisci
            eius numquam omnis corporis qui ab! Magni incidunt, eius dignissimos placeat numquam ut cum
            reiciendis architecto minus soluta.
            Unde possimus commodi impedit rem minus aut pariatur libero magni illum consequuntur id laborum
            aliquam, rerum accusantium fuga voluptate ipsa assumenda dolores ab maxime, et accusamus eius?
            Tempore, quod voluptatum!</p>

          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nulla.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est nesciunt, cum fugit veniam
            animi in
            modi perspiciatis? Aliquid officia eaque aliquam eveniet eum illum in nihil similique amet at.
            Et blanditiis eveniet neque quos quis odio ipsam suscipit, autem illo necessitatibus laudantium,
            fugit eligendi consectetur sit sapiente ab fuga facere numquam nemo enim mollitia vero! Neque
            corporis quisquam ex.
            Quis ex est officiis porro laboriosam voluptatem numquam incidunt cumque. Doloremque aliquid
            odio,
            at maiores fugit quam eum illo obcaecati temporibus laudantium earum dolore ab quis? Impedit
            illum
            praesentium eligendi?
            Quis saepe error consequatur dicta distinctio minima asperiores sunt? Consequuntur incidunt
            adipisci
            eius numquam omnis corporis qui ab! Magni incidunt, eius dignissimos placeat numquam ut cum
            reiciendis architecto minus soluta.
            Unde possimus commodi impedit rem minus aut pariatur libero magni illum consequuntur id laborum
            aliquam, rerum accusantium fuga voluptate ipsa assumenda dolores ab maxime, et accusamus eius?
            Tempore, quod voluptatum!</p>

          <h1>Lorem ipsum dolor sit.</h1>
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dolores commodi corporis
            incidunt veritatis suscipit.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est nesciunt, cum fugit veniam
            animi in
            modi perspiciatis? Aliquid officia eaque aliquam eveniet eum illum in nihil similique amet at.
            Et blanditiis eveniet neque quos quis odio ipsam suscipit, autem illo necessitatibus laudantium,
            fugit eligendi consectetur sit sapiente ab fuga facere numquam nemo enim mollitia vero! Neque
            corporis quisquam ex.
            Quis ex est officiis porro laboriosam voluptatem numquam incidunt cumque. Doloremque aliquid
            odio,
            at maiores fugit quam eum illo obcaecati temporibus laudantium earum dolore ab quis? Impedit
            illum
            praesentium eligendi?
            Quis saepe error consequatur dicta distinctio minima asperiores sunt? Consequuntur incidunt
            adipisci
            eius numquam omnis corporis qui ab! Magni incidunt, eius dignissimos placeat numquam ut cum
            reiciendis architecto minus soluta.
            Unde possimus commodi impedit rem minus aut pariatur libero magni illum consequuntur id laborum
            aliquam, rerum accusantium fuga voluptate ipsa assumenda dolores ab maxime, et accusamus eius?
            Tempore, quod voluptatum!</p>

        </div>
      `;
    }
}