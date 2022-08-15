import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container mt-4">
        <div className="alert alert-primary" role="alert">
          <h4 className="alert-heading">Information</h4>
          <p>
            Ini adalah sebuah website yang dibuat dengan Library ReactJS pada
            saat mengikuti Deacourse.
            <br />
            Saat course sudah selesai, Bang Dea memberikan beberapa tugas,
            seperti:
            <br />
            <br />
            1. routing url posts dengan isian component dari api post diatas
            (dengan data title saja) = <strong>Done</strong>
            <br />
            2. modif ui homepage = <strong>BINGUNG BANGGGG</strong>
            <br />
            3. active navigation bar (ketika default atau ketika berada di
            routing menunya) = <strong>Done</strong>
            <br />
            4. ketika post title diklik munculkan modal popup id, title dan
            deskripsi dari title yg diklik tersebut = <strong>Done</strong>
            <br />
            5. kreatifitas ui masing2 = <strong>SAYA GA KREATIF BANG :(</strong>
          </p>
          <hr />
          <p className="mb-0">
            oleh: <strong>Arman</strong>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
