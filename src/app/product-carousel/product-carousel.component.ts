import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {
  @Input() games
  constructor() { }

  ngOnInit() {


  }
  ngAfterContentChecked() {
    var $carousel_cells = $("#product-carousel li");
    var $carousel_dots = $("#carousel-dots li");
    var $carousel_nav = $(".carousel-nav");
    var selected_product_index = 0;

    function selectProduct(index) {
      selected_product_index = index % $carousel_cells.length;

      if (selected_product_index < 0)
        selected_product_index = $carousel_cells.length + selected_product_index;

      $carousel_cells.each(function (i) {
        var offset = i - selected_product_index;
        if (offset < 0) offset += $carousel_cells.length;

        var index = void 0;
        for (index = 0; index < $carousel_cells.length + 1; index++) {
        
          $(this)
            .removeClass("item-" + index)
            .addClass("item-" + (offset + 1));
        }

      });

      $carousel_dots
        .eq(index)
        .addClass("active")
        .siblings("li")
        .removeClass("active");
    }

    /* Arrow clicks */
    $carousel_nav.click(function () {
      var delta = $(this).hasClass("prev") ? -1 : 1;
      var $delta_product = $(
        "#product-carousel li:eq(" +
        (selected_product_index + delta) % $carousel_cells.length +
        ")"
      );
      var delta_product_index = $delta_product.index();
      selectProduct(delta_product_index);
    });

    /* Can clicks */
    $carousel_cells.click(function () {
      selectProduct($(this).index());
    });

    /* Pagination */
    $carousel_dots.click(function (e) {
      selectProduct($(this).index());
      $(e.currentTarget)
        .addClass("active")
        .siblings("li")
        .removeClass("active");
    });

    /* Left/Right key arrows */
    $(document).keydown(function (e) {
      var delta = e.keyCode == 37 ? -1 : 1;
      var $delta_product = $(
        "#product-carousel li:eq(" +
        (selected_product_index + delta) % $carousel_cells.length +
        ")"
      );
      var delta_product_index = $delta_product.index();

      if (e.keyCode == 37 || e.keyCode == 39) {
        selectProduct(delta_product_index);
        return false;
      }
    });

  }

}
