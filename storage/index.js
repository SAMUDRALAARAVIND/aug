/**
 * 1. Date api
 * 2. Storage elements
 *    localStorage
 *    sessionStorage
 *    cookieStorage
 * 3. auction status app continuation.
 * 4. Intro to Youtube clone. (setup).
 */

// GMT Greenwich mean time.
// IST Indian standard time

// GMT 12:00PM in the afternoon
// IST 5:30PM

// 8:20PM IST => 2:50PM GMT

// let date = new Date();

// console.log(date);

// 2022 03rd Jan 12:00PM
// Date(year, month, date, hr, min, seconds, millis)
// let date = new Date(2024, 0, 8, 12, 0, 0);

// console.log(`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`);

// console.log(date.getDay());
// unix time or epoch time

// the number of seconds from 1970 Jan 01st 12:00AM in the midnight w.rto UTC time is called as epoch time or unix time.

// Jan 01st 1970 6:00:00AM (IST)
// const instance = new Date(1970, 0, 1, 6, 0, 0, 0);

// // unix base time 1970 Jan 01st 12:00:00AM (UTC/GMT)
// console.log(instance.getTime() / 1000);

// find the number of seconds between two instances
// 1. 2021 Feb 10th 3:30PM (epoch time: x seconds)
// 2. 2023 Aug 29th 8:00PM (epoch time: y seconds)
// y - x

// let instance1 = new Date(2021, 1, 10, 15, 30, 0, 0);
// let instance2 = new Date(2023, 7, 29, 20, 0, 0, 0);

// let secondsGap = (instance2.getTime() - instance1.getTime()) / 1000;

// const daysGap = secondsGap / (3600 * 24);
// console.log(daysGap);

/**
 *
 * Storage elements in browser:
 *  localStorage (HashMap)
 *      Permenent storage
 *  sessionStorage (HashMap)
 *      Temporary storage
 *  cookieStorage
 *      can have a custom session time ( expiry time ).
 *
 */
// localStorage.setItem("name", "aravind");
// sessionStorage.setItem("name", "aravind");

// const instance = new Date().getTime(); // epoch time in milliseconds for that instace
// // 12:30:10 seconds => 12:30:20 second
// const expityTime = new Date(instance + 10000); // instance after 10 seconds

// document.cookie = `name=pradeep; expires=${expityTime.toUTCString()}`;
// document.cookie = "age=34";
// document.cookie = "student=true";
