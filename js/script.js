let navbershow = document.querySelector(".navber");
const iconshownavber = document.getElementById("click");
iconshownavber.addEventListener("click", function() {
  navbershow.classList.toggle("active");
});

let listcourses = document.querySelectorAll(".category li");
let postcourese = document.querySelectorAll(".box");
let imgbox = document.querySelectorAll(".img_cor img");

listcourses.forEach(function(even) {
  even.addEventListener("click", function(e) {
    e.preventDefault();

    // console.log(e.currentTarget.dataset);
    listcourses.forEach(li => {
      li.classList.remove("active");
      this.classList.add("active");
    });

    postcourese.forEach(e => {
      e.style.display = "none";
    });
    document.querySelectorAll(this.dataset.courses).forEach(el => {
      el.style.display = "block";
    });
  });
});

/* function calculeter(num, numx, gap) {
  return `${num / numx - gap}`;
}

console.log(calculeter(1140, 4, 10)); */
