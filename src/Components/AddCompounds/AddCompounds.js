import './AddCompounds.css';
import { useState } from 'react';
import Axios from 'axios';
import AdminNavbar from "./../AdminNavbar/AdminNavbar";

function AddCompounds() {


  const [inputs, setInputs] = useState({});
  const handChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }
    


  const SubmitTable = (event) => {
    console.log(inputs)
    Axios.post('https://aocd.swmd.co.in/aocdbackend/api/addData/', inputs).then(function(response){
      console.log(response.data);
    });
  }

  return (
    <>
    <AdminNavbar colors={true}/>
    <div className='container'>
      <form action="#">
        <div className="form first">
            <div className="details personal">
                <span className="title">Compound Details</span>
                <div className='fields'>
                  <div className='input-field'>
                    <label>Accession No</label>
                    <input type="text" name="accession_no" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Compound Name</label>
                    <input type="text" name="compound_name" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>PUBCHEM ID</label>
                    <input type="text" name="pubchem_cid"onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Molecular Formula</label>
                    <input type="text" name="molf" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Molecular Weight</label>
                    <input type="text" name="mw" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Filter ID</label>
                    <input type="text" name="filter_id" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Mode of Action</label>
                    <input type="text" name="moa" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Origin</label>
                    <input type="text" name="origin"onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Scientific Name</label>
                    <input type="text" name="sci_name" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Ref DOI</label>
                    <input type="text" name="ref_doi" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Year of Publication</label>
                    <input type="text" name="yop" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Name of Journal</label>
                    <input type="text" name="jonl_name"onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Class of Compounds</label>
                    <input type="text" name="class_comp" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Biological Activity</label>
                    <input type="text" name="bio_act" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>IUPAC Name</label>
                    <input type="text" name="iupac_name" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Canonical Smiles</label>
                    <input type="text" name="canl_smiles" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>InchI</label>
                    <input type="text" name="inchl"onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>xlogP3</label>
                    <input type="text" name="xlogp3" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>H-Bond Donor</label>
                    <input type="text" name="h_bond_d" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>H-Bond Acceptor</label>
                    <input type="text" name="h_bond_a" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Molar Refraction</label>
                    <input type="text" name="mol_refa"onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>TPSA</label>
                    <input type="text" name="tpsa" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>No. of rotatable Bonds</label>
                    <input type="text" name="rot_bonds" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>No. of heavy Atoms</label>
                    <input type="text" name="heavy_atoms" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Lipinski - Drug likeness</label>
                    <input type="text" name="lipinski" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>BBB Permeant</label>
                    <input type="text" name="bbb_per" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Bioavailability Score</label>
                    <input type="text" name="bioavail" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>LD50 values</label>
                    <input type="text" name="ld50_val" onChange={handChange}>
                    </input>
                  </div>
                  <div className='input-field'>
                    <label>Toxicity Class</label>
                    <input type="text" name="toxicity" onChange={handChange}>
                    </input>
                  </div>
                </div>
                <button class="nextBtn" onClick={SubmitTable}>
                  <span class="btnText">Add Data</span>
                  <i class="uil uil-navigator"></i>
                </button>
              </div>
            </div>        
      </form>
    </div>
    </>
  );
}

export default AddCompounds;
