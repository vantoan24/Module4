function showInfo(name: string, ...cource :string[]) :string {
    return name + " study " + cource.join(", ");
}
console.log(showInfo("Toan","es6","php","java"));
