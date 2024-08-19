//transliterates latin text to russian
export const transliterateRU = (text: string): string => {
  const dictionary: { [key: string]: string } = {
    a: "а",
    b: "б",
    c: "ц",
    d: "д",
    e: "е",
    f: "ф",
    g: "г",
    h: "х",
    i: "и",
    j: "й",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "о",
    p: "п",
    q: "к",
    r: "р",
    s: "с",
    t: "т",
    u: "у",
    v: "в",
    w: "в",
    x: "кс",
    y: "ы",
    z: "з",
  };

  return text
    .split("")
    .map((char) => dictionary[char] || char)
    .join("");
};
