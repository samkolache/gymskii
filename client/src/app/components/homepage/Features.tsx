import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';


export default function Features() {
    return(
        <>
        <div className="px-6 py-10 bg-gray-100">
        <h5 className = "text-lg md:text-xl text-brandHeading font-semibold text-center mb-2">WHAT DO WE OFFER?</h5>
        <h2 className=" text-3xl md:text-4xl font-bold text-center mb-6">Everything you need</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <Card icon = {<TrendingUpIcon style={{ fontSize: 60 }} />} title = "Visual Progress Tracking" p = "Log every workout and see your progress unfold with detailed graphs and visuals." />
                <Card icon = {<AccessAlarmIcon style={{ fontSize: 60 }} />} title = "Supplement Reminders" p = "Track every supplement and set timely reminders to stay on top of your routine." />
                <Card icon = {<RestaurantIcon style={{ fontSize: 60 }} />} title = "Diet Tracking" p = "Track your important macros to ensure you're properly fueled" />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <Card icon = {<DashboardIcon style={{ fontSize: 60 }} />} title = "Workout Dashboard" p = "View every aspect of your routine, all in one central hub" />
                <Card icon = {<SchoolIcon style={{ fontSize: 60 }} />} title = "Learn Effectively" p = "Take advantage of our free resources to improve how you workout" />
                <Card icon = {<GroupIcon style={{ fontSize: 60 }} />} title = "Community" p = "Join a community of driven individuals all striving for daily improvement." />
            </div>
        </div>
        </>
    )
}

export function Card({icon, title, p}) {
    return(
        <>
            <div className="max-w-sm lg:max-w-md px-8 py-10 flex flex-col items-center gap-4">
                    <span className=" text-brand">{icon}</span>
                    <h3 className="text-xl md:text-2xl font-medium text-brandHeading">{title}</h3>
                    <p className="text-center text-md leading-relaxed">{p}</p>
                </div>
        </>
    )

}