import React, { Component } from 'react';
import { initializeIcons } from '@uifabric/icons';
import {Fabric} from 'office-ui-fabric-react/lib/Fabric'
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import './App.css';
import {
  DetailsList,
  DetailsListLayoutMode,
  CheckboxVisibility,
  Selection,
  IColumn,
  IDetailsList
} from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';

initializeIcons();

let columns = [
  {
    key: 'locationid',
    name: '',
    fieldName: 'locationid',
    minWidth: 40,
    maxWidth: 40,
    onRender: (item) => (
      <div>
        <i className="ms-Icon ms-Icon--Add" aria-hidden="true"></i> 
      </div>
    )
  },
  {
    key: 'location',
    name: 'Location',
    fieldName: 'location',
    minWidth: 140,
    maxWidth: 140,
  },
  {
    key: 'floor',
    name: 'Floor',
    fieldName: 'floor',
    minWidth: 140,
    maxWidth: 140,
  },
  {
    key: 'building',
    name: 'Building',
    fieldName: 'building',
    minWidth: 140,
    maxWidth: 140,
  },
  {
    key: 'location_type',
    name: 'Location Type',
    fieldName: 'location_type',
    minWidth: 200,
    maxWidth: 200,
  },
  {
    key: 'capacity',
    name: 'Capacity',
    fieldName: 'capacity',
    minWidth: 140,
    maxWidth: 140,
  },
  {
    key: 'like',
    name: '',
    fieldName: 'like',
    onRender: (item) => (
      <div>
        <i className="ms-Icon ms-Icon--Heart" aria-hidden="true"></i> 
      </div>
    )
  }
];

let rows = [
  {
    key: 'locationid',
    locationid: '12345',
    location: '5003 A',
    floor: '6th floor',
    building: 'Denver office (*)',
    location_type: 'Conference Room (Test)',
    capacity: '1-44',
    like: ''
  }
]

const refreshButtonStyles = {
  root: {
    verticalAlign: 'middle'
  }
};

class App extends Component {
  selection: Selection;

  constructor() {
    super();
    
    this.selection = new Selection();
    this.state = {
      rows: null,
      isLoading: false
    };
  }

  render() {
    return (
      <Fabric className="App ms-Fabric">
        <div className="ms-Grid" dir="ltr">

            {/* HEADER START - SEND BUTTON, DATEPICKER, TIMER PICKER */}
            <div className="ms-Grid-row header-section">
              <div className="ms-Grid-col ms-sm1 ms-md1 ms-lg1">
                  <DefaultButton>
                    <i className="ms-Icon ms-Icon--FolderHorizontal padding-right-5" aria-hidden="true"></i> 
                    SEND
                  </DefaultButton>
              </div>
              <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg3">
                <Dropdown
                  defaultSelectedKey={'A'}
                  options={[
                    { key: 'A', text: 'Book a Meeting Room (*) ' },
                    { key: 'B', text: 'Book Hall' },
                    { key: 'D', text: 'Schedule Meeting' },
                    { key: 'E', text: 'Book Conference' }
                  ]}
                />
              </div>
              <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                <DatePicker
                  isRequired={false}
                  allowTextInput={false}
                />
              </div>
              <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                  TIMEPICKER1
              </div>
              <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                  TIMEPICKER2
              </div>
              <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
              </div>
            </div>
            {/* HEADER END - SEND BUTTON, DATEPICKER, TIMER PICKER */}

            {/* TABS SECTION START */}
            <div className="ms-Grid-row background-blue">
              <div className="ms-Grid-col ms-sm1 ms-md1 ms-lg1 selectedTab padding-20">
                List View
              </div>
              <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2 padding-20 color-white">
                Schedule View
              </div>
              <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6 padding-20 color-white">
                Additional Information
              </div>
              <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg3 padding-20 color-white text-right">
                Selected Locations (0)
              </div>
            </div>
            {/* TABS SECTION END */}


            {/* FILTERS SECTION START */}
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 filter-section">

              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2 selectedTab">
                  <DefaultButton>
                    <i className="ms-Icon ms-Icon--Filter padding-right-5 location-icon" aria-hidden="true"></i> 
                    Location Filter
                  </DefaultButton>
                </div>

                <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2 selectedTab">
                  <DefaultButton>
                    <i className="ms-Icon ms-Icon--ChromeClose padding-right-5 close-icon" aria-hidden="true"></i> 
                    Clear All
                  </DefaultButton>
                </div>

                <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2 selectedTab">
                  <DefaultButton>
                    Capacity <i className="ms-Icon ms-Icon--ChromeClose padding-right-5 padding-left-5 close-icon" aria-hidden="true"></i> 
                    1
                  </DefaultButton>
                </div>

                <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg3 selectedTab">
                  <DefaultButton>
                    Locations <i className="ms-Icon ms-Icon--ChromeClose padding-right-5 padding-left-10 close-icon" aria-hidden="true"></i> 
                    Denver Office (*)
                  </DefaultButton>
                </div>
              </div>

            </div>
            {/* FILTERS SECTION END */}

            {/* LIST VIEW START */}
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 list-section">
              <MarqueeSelection selection={this._selection}>
                <DetailsList
                  checkboxVisibility={CheckboxVisibility.hidden}
                  items={rows}
                  columns={columns}
                  selection={this.selection}
                />
              </MarqueeSelection>
            </div>
            {/* LIST VIEW END */}
        </div>

      </Fabric>
    );
  }
}

export default App;
