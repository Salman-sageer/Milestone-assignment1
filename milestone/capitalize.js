function capitalizeName(name) {
    return name[0] === name[0].toLowerCase() 
        ? name[0].toUpperCase() + name.slice(1) 
        : name;
}

// Example usage
console.log(capitalizeName("john"));
console.log(capitalizeName("Alice"));
