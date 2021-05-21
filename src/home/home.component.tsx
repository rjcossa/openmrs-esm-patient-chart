import React from 'react';
import {
  Grid,
  Row,
  Column,
  ContentSwitcher,
  Tabs,
  Tab,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  TextInput,
  TextArea,
  Select,
  SelectItem,
  Switch,
  Button,
  DatePicker,
  DatePickerInput,
  FormGroup,
  RadioButtonGroup,
  RadioButton,
} from 'carbon-components-react';
import styles from '../styles.scss';

const Home: React.FC = () => {
  return (
    <>
      <Grid className={styles['mt-4']}>
        <Row>
          <Column>
            <Breadcrumb>
              <BreadcrumbItem href="#">Patients</BreadcrumbItem>
              <BreadcrumbItem href="#">Agnes Testerson</BreadcrumbItem>
              <BreadcrumbItem isCurrentPage href="#">
                Add HTS Record
              </BreadcrumbItem>
            </Breadcrumb>
          </Column>
        </Row>
        <Row className={styles['mt-1']}>
          <Column lg={{ span: 3 }}>
            <p>Vertical navigation will be here</p>
            <Button kind="primary" style={{ display: 'block', marginTop: '0.5rem', width: '100%' }}>
              Create Record
            </Button>
            <Button kind="tertiary" style={{ display: 'block', marginTop: '0.5rem', width: '100%' }}>
              Cancel
            </Button>
          </Column>
          <Column lg={{ span: 9 }}>
            <Tabs scrollIntoView={false} type="container">
              <Tab href="#" id="tab-screening" label="Screening">
                <h3>Add a HTS Record</h3>
                <h4 className={styles['mt-1']}>Screening</h4>
                <p>All fields are required unless marked optional</p>

                <h5 className={styles['mt-2']}>Testing history</h5>

                <div className={styles['mt-1']}>
                  <p>Ever tested positive for HIV before?</p>
                  <ContentSwitcher style={{ width: '20%', marginTop: '0.5rem' }}>
                    <Switch name={'first'} text="No" />
                    <Switch name={'second'} text="Yes" />
                  </ContentSwitcher>
                </div>

                <div className={styles['mt-1']}>
                  <p>Last HIV test result</p>
                  <ContentSwitcher style={{ width: '30%', marginTop: '0.5rem' }}>
                    <Switch name={'first'} text="Positive" />
                    <Switch selected name={'second'} text="Negative" />
                    <Switch name={'second'} text="Inconclusive" />
                  </ContentSwitcher>
                </div>

                <div className={styles['mt-1']}>
                  <p>Months since last HIV test</p>
                  <TextInput
                    labelText=""
                    style={{ width: '30%', marginTop: '0.5rem' }}
                    id="test2"
                    invalidText="Invalid error message."
                    placeholder="Enter number of months"
                  />
                </div>

                <div className={styles['mt-1']}>
                  <p>Date of last HIV test</p>
                  <DatePicker dateFormat="m/d/Y" datePickerType="single" style={{ width: '30%' }}>
                    <DatePickerInput
                      id="date-picker-default-id"
                      placeholder="mm/dd/yyyy"
                      labelText="Date picker label"
                      type="text"
                    />
                  </DatePicker>
                </div>

                <h5 className={styles['mt-2']}>Partner Information</h5>

                <div className={styles['mt-1']}>
                  <p>Partner HIV status as reported</p>
                  <FormGroup legendText="Radio button heading">
                    <RadioButtonGroup
                      defaultSelected="Negative"
                      name="radio-button-group"
                      valueSelected="Negative"
                      orientation="vertical">
                      <RadioButton id="radio-1" labelText="Positive" value="Positive" />
                      <RadioButton id="radio-2" labelText="Negative" value="Negative" />
                      <RadioButton id="radio-3" labelText="Unknown" value="Unknown" />
                    </RadioButtonGroup>
                  </FormGroup>
                </div>
              </Tab>
              <Tab href="#" id="tab-approach" label="Approach">
                <div className="some-content">Content for second tab goes here.</div>
              </Tab>
              <Tab href="#" id="tab-pre-test-counselling" label="Pre-test counselling">
                <div className="some-content">Content for third tab goes here.</div>
              </Tab>
            </Tabs>
          </Column>
        </Row>
      </Grid>
    </>
  );
};

export default Home;
