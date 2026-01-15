function getindex(symbol){
    return symbol.charCodeAt(0) - "a".charCodeAt(0);
}

function isAnagram(s, t) {
    const s_page = Array(26).fill(0);
    const t_page = Array(26).fill(0);

    for(let i=0;i<s.length;i++){
        const s_index = getindex(s[i]);
        s_page[s_index]++;
    }
    for(let i=0;i<t.length;i++){
        const t_index = getindex(t[i]);
        t_page[t_index]++;
    }
    
 console.log(s_page)
 console.log(t_page)
    for(let i=0;i<26;i++){
        // console.log(i);
        const s_compare = s_page[i];
        const t_compare = t_page[i];
        console.log("result",i+1,":- ",s_compare," ",t_compare);
        if(s_page[i] !== t_page[i]){
            console.log("reached_false");
            return false;
        }
    }
    console.log("reached_true");
    return true;
}

isAnagram("racecar","carrace");