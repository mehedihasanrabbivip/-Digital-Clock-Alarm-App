
const clock = document.getElementById("clock");
    const alarmInput = document.getElementById("alarmTime");
    const alarmStatus = document.getElementById("alarmStatus");
    const alarmSound = document.getElementById("alarmSound");

    let alarmTime = null;

    function updateClock() {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-GB'); // 24-hour format
      clock.textContent = timeString;

      if (alarmTime && timeString === alarmTime) {
        alarmSound.play();
        alert("⏰ Wake up! Alarm ringing!");
        clearAlarm();
      }
    }

    setInterval(updateClock, 1000);

    function setAlarm() {
      const time = alarmInput.value;
      if (!time) {
        alert("Please select a time first.");
        return;
      }
      alarmTime = time + ":00"; // Convert to full time format
      alarmStatus.textContent = `⏰ Alarm set for ${time}`;
    }

    function clearAlarm() {
      alarmTime = null;
      alarmStatus.textContent = "🚫 No alarm set";
      alarmSound.pause();
      alarmSound.currentTime = 0;
    }