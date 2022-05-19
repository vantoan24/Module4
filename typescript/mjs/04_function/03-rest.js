function showInfo(name, ...cource) {
    return name + " study " + cource.join(", ");
}
console.log(showInfo("Toan", "es6", "php", "java"));
