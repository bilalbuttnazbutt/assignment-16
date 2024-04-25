var guest_list = ["maryam", "ansar", "sana", "sadia", "nazish"];
var not_coming = "maryam";
var new_guest = "hina";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou are invited for a dinner tomorrow.\n\nThank you."));
}
console.log("ms ".concat(not_coming, ", is not coming for dinner tomorrow."));
guest_list.unshift("naveed");
guest_list.splice(guest_list.length / 2, 2, "Messi");
guest_list.push("ayaz");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou are invited for a dinner tomorrow.\n\n"));
}
console.log("me have found a bigger dinner table so me invited more guests");
