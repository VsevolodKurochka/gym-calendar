import {Spin, Typography, Row, Col, Calendar, ConfigProvider} from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import moment from 'moment';

const { Title } = Typography;


moment.updateLocale('en', {
  monthsShort : [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ],
  weekdaysMin : ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
});

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
              <ConfigProvider locale={ruRU}>
                <Calendar fullscreen={false} onPanelChange={onPanelChange} onSelect={onSelect} />
              </ConfigProvider>

            </div>
        </>
    );
};

export default Home;
