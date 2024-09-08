let latsetCourses = document.querySelector(".latset-courses-cards .row");
let presellProductElem = document.querySelector(".presell-slider .swiper-wrapper");

function loadDataFromDataBase() {
  let dataFromDataBase = JSON.parse(localStorage.getItem("products"));
  dataFromDataBase.forEach(function (product) {
    let imgProduct = product.img;
    let nameProduct = product.name;
    let priceProduct = product.price;
    let template = `
    <div class="col-4">
    <div class="courses-card">
        <div class="course-img">
            <a href="#">
                <img src="${imgProduct}">
            </a>
        </div>
        <div class="course-name">
            <a href="#">${nameProduct}</a>
        </div>
        <div class="course-teacher">
            <div class="course-teacher-icon">
                <i class="fas fa-chalkboard-teacher"></i>
            </div>
            <div class="course-teacher-name">
                <a href="#">محمد امین سعیدی راد</a>
            </div>
        </div>
        <div class="course-footer">
            <div class="course-students">
                <div class="course-student-icon">
                    <i class="fas fa-users"></i>
                </div>
                <div class="course-student-count">
                    <span>63</span>
                </div>
            </div>
            <div class="course-price">
                <span>${priceProduct}</span>
            </div>
        </div>
    </div>
</div>
    `;
    latsetCourses.insertAdjacentHTML("beforeend", template);
  });

  let presellProduct = dataFromDataBase.filter(function (product) {
    return product.presell === true;
  });
  presellProduct.forEach(function (product) {
    let imgProduct = product.img;
    let nameProduct = product.name;
    let priceProduct = product.price;
    let template = `
      <div class="swiper-slide">
                            <div class="courses-card">
                                <div class="course-img">
                                    <a href="#">
                                        <img src="${imgProduct}">
                                    </a>
                                </div>
                                <div class="course-name">
                                    <a href="#">${nameProduct}</a>
                                </div>
                                <div class="course-teacher">
                                    <div class="course-teacher-icon">
                                        <i class="fas fa-chalkboard-teacher"></i>
                                    </div>
                                    <div class="course-teacher-name">
                                        <a href="#">محمد امین سعیدی راد</a>
                                    </div>
                                </div>
                                <div class="course-footer">
                                    <div class="course-students">
                                        <div class="course-student-icon">
                                            <i class="fas fa-users"></i>
                                        </div>
                                        <div class="course-student-count">
                                            <span>63</span>
                                        </div>
                                    </div>
                                    <div class="course-price">
                                        <span>${priceProduct}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
    `;
    presellProductElem.insertAdjacentHTML("beforeend" , template)
  });
}

window.addEventListener("load", loadDataFromDataBase);
