let ampm = document.getElementById("ampm");

        function displayTime() {
            let datetime = new Date();
            let hr = datetime.getHours();
            let min = padzero(datetime.getMinutes());
            let sec = padzero(datetime.getSeconds());

            if (hr >= 12) {
                hr = hr - 12;
                ampm.innerHTML = "PM";
            } else {
                ampm.innerHTML = "AM";
            }

            document.getElementById("hou").innerHTML = padzero(hr);
            document.getElementById("min").innerHTML = min;
            document.getElementById("sec").innerHTML = sec;
        }

        function padzero(num) {
            return num < 10 ? "0" + num : num;
        }

        setInterval(displayTime, 1000); // Update every 1 second