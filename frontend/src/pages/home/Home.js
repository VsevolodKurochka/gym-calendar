import {Calendar as MobileCalendar} from 'antd-mobile';
import {Spin, Typography, Row, Col, Calendar} from 'antd';
const { Title } = Typography;
import enUS from 'antd-mobile/lib/calendar/locale/en_US';

const Home = ({loading}) => {

    const onPanelChange = (value, mode) => {
        console.log(value, mode);
    }

    const onSelect = (date) => {
        console.log(date);
    }

    if (loading) {
        return <Spin size={'large'} />;
    }

    return (
        <>
            <Title>CALENDAR</Title>
            <MobileCalendar
                visible={true}
            />
            <br />
            <h1>Desktop:</h1>
            <div className="home-calendar">
                <Calendar fullscreen={false} onPanelChange={onPanelChange} onSelect={onSelect} />
            </div>
        </>
    );
};

export default Home;
