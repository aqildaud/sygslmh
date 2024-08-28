function Music() {
  return (
    <div>
      <main className="pt-3">
        {/* <p className="text-white">List</p> */}
        <ol className="text-white">
          <li>
            <a
              className="fst-italic"
              href="https://youtu.be/Q8k3qB61lhk"
              target="_blank"
            >
              Human Sadness
            </a>{" "}
            by{" "}
            <a
              href="https://en.wikipedia.org/wiki/The_Voidz"
              target="_blank"
              style={{ color: "#a6e4e7" }}
            >
              The Voidz
            </a>
          </li>
          <li>
            <a
              className="fst-italic"
              href="https://youtu.be/_fA9dqBQqB8"
              target="_blank"
            >
              Kognitif{">"}
            </a>{" "}
            by{" "}
            <a
              href="https://ms.wikipedia.org/wiki/Akta_Angkasa"
              target="_blank"
              style={{ color: "#a6e4e7" }}
            >
              Akta Angkasa
            </a>
          </li>
        </ol>
      </main>
    </div>
  );
}

export default Music;
