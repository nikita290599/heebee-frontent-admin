import React, { useEffect, useState } from 'react';
import ReactMultiselectCheckboxes from 'react-multiselect-checkboxes/lib/ReactMultiselectCheckboxes';
import { useDispatch, useSelector } from 'react-redux';
import { getBranches } from '../../../store/actionCreators/Branch/BranchAction';
import AddAdmin from './AddAdmin';
import AddPermissions from './AddPermissions';

const AddAdminmain = (props) => {
    const dispatch =useDispatch();
    const branch = useSelector(state => state.branch)
    const [selectedBranches, setSelected] = useState([]);
    const [options, setOptions] = useState([])
    const [step,setStep]=useState(1);
    useEffect(() => {
        dispatch(getBranches());
        console.log("Branch", branch)
      }, [])
      useEffect(() => {
        let array = []
        if (branch.data) {
          branch.data.data.map((item, index) => {
            array.push({ label: item.branch_name, value: item.branch_id })
          })
        }
        setOptions(array)
        console.log(array)
      }, [branch])
    
    function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
        if (value && value.some((o) => o.value === "*")) {
          return `${placeholderButtonLabel}: All`;
        } else {
          return `${placeholderButtonLabel}: ${value.length} selected`;
        }
      }
      function onChange(value, event) {
        if (event.action === "select-option" && event.option.value === "*") {
          this.setState(this.options);
        } else if (
          event.action === "deselect-option" &&
          event.option.value === "*"
        ) {
          this.setState([]);
        } else if (event.action === "deselect-option") {
          this.setState(value.filter((o) => o.value !== "*"));
        } else if (value.length === this.options.length - 1) {
          this.setState(this.options);
        } else {
          this.setState(value);
        }
      }
    
      const displayBranch = () => {
    
        if (options) {
          return <div className='categorySelect'><ReactMultiselectCheckboxes
            options={[{ label: "All", value: "*" }, ...options]}
            placeholderButtonLabel="Branches"
            getDropdownButtonLabel={getDropdownButtonLabel}
            value={selectedBranches}
            onChange={onChange}
            setState={setSelected}
            required
          /></div>
        }
    
      }
      const main = () => {
        if (step === 1) {
            return (
                <AddAdmin
                    sideToggle={props.sideToggle}
                    displayBranch={displayBranch}
                    setStep={setStep}
                />
            )
        }
        else return (
            <AddPermissions
                    sideToggle={props.sideToggle}
                    displayBranch={displayBranch}
                    setStep={setStep}
                />
        )
    }

    return (
        <div>
            {main()}
        </div>
    );
};

export default AddAdminmain;