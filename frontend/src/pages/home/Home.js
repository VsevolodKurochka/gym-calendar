import {Spin, Typography, Row, Col, Calendar} from 'antd';
const { Title } = Typography;


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
            <div className="home-calendar">
                <Calendar fullscreen={false} onPanelChange={onPanelChange} onSelect={onSelect} />
            </div>
        </>
    );
};

export default Home;
