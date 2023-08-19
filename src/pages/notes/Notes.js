import React from "react";

import "./style.scss";
import ElectricalMachines2 from "./ElectricalMachines2/ElectricalMachines2.js";
import PowerSystem2 from "./PowerSystem2/PowerSystem2.js";
import AdvancedControlSystem from "./advancedControlSystem/AdvancedControlSystem";
import AdavancedPowerElectronics from "./advancedPowerElectronics/AdavancedPowerElectronics";
import RenewableEnergyResources from "./renewableEnergyResources/RenewableEnergyResources";
import ArtificialIntelligence from "./artificialIntelligence/ArtificialIntelligence";
import PowerGenerationEconomics from "./powerGenerationEconomics/PowerGenerationEconomics";

const Notes = () => {
  return (
    <div className="notes">
      <div className="notesBody">
        <div className="heading">NOTES SECTION</div>
        <div className="subheading">
          Make notes today, Make enough notes tomorrow.
        </div>
        <div className="subjectWithNotes">
          <div className="subject">Electrical Machines - II</div>
          <div className="note">
            <ElectricalMachines2 />
          </div>

          <div className="subject">Power System - II</div>
          <div className="note">
            <PowerSystem2 />
          </div>

          <div className="subject">Advanced Control System</div>
          <div className="note">
            <AdvancedControlSystem />
          </div>

          <div className="subject">Advanced Power Electronics</div>
          <div className="note">
            <AdavancedPowerElectronics />
          </div>

          <div className="subject">
            Reneable Energy Resources and Converters
          </div>
          <div className="note">
            <RenewableEnergyResources />
          </div>

          <div className="subject">Artificial Intelligence</div>
          <div className="note">
            <ArtificialIntelligence />
          </div>

          <div className="subject">Power Generation and Economics</div>
          <div className="note">
            <PowerGenerationEconomics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
