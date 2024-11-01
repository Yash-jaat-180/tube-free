export const svgs = {
    pocoLoading: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="200" height="200" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g>
            <circle fill="#ffffff" r="4" cy="50" cx="60">
                <animate begin="-0.67s" keyTimes="0;1" values="95;35" dur="1s" repeatCount="indefinite" attributeName="cx"></animate>
                <animate begin="-0.67s" keyTimes="0;0.2;1" values="0;1;1" dur="1s" repeatCount="indefinite" attributeName="fill-opacity"></animate>
            </circle>
            <circle fill="#ffffff" r="4" cy="50" cx="60">
                <animate begin="-0.33s" keyTimes="0;1" values="95;35" dur="1s" repeatCount="indefinite" attributeName="cx"></animate>
                <animate begin="-0.33s" keyTimes="0;0.2;1" values="0;1;1" dur="1s" repeatCount="indefinite" attributeName="fill-opacity"></animate>
            </circle>
            <circle fill="#ffffff" r="4" cy="50" cx="60">
                <animate begin="0s" keyTimes="0;1" values="95;35" dur="1s" repeatCount="indefinite" attributeName="cx"></animate>
                <animate begin="0s" keyTimes="0;0.2;1" values="0;1;1" dur="1s" repeatCount="indefinite" attributeName="fill-opacity"></animate>
            </circle>
        </g><g transform="translate(-15 0)">
                <path transform="rotate(90 50 50)" fill="#ae7aff" d="M50 50L20 50A30 30 0 0 0 80 50Z"></path>
                <path fill="#ae7aff" d="M50 50L20 50A30 30 0 0 0 80 50Z">
                    <animateTransform keyTimes="0;0.5;1" values="0 50 50;45 50 50;0 50 50" dur="1s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
                </path>
                <path fill="#ae7aff" d="M50 50L20 50A30 30 0 0 1 80 50Z">
                    <animateTransform keyTimes="0;0.5;1" values="0 50 50;-45 50 50;0 50 50" dur="1s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
                </path>
            </g><g></g></g></svg>
    ),
    radiation: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="200" height="200" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-width="2" stroke="#ff7a7a" fill="none" r="0" cy="50" cx="50">
            <animate begin="0s" calcMode="spline" keySplines="0 0.2 0.8 1" keyTimes="0;1" values="0;37" dur="0.9803921568627451s" repeatCount="indefinite" attributeName="r"></animate>
            <animate begin="0s" calcMode="spline" keySplines="0.2 0 0.8 1" keyTimes="0;1" values="1;0" dur="0.9803921568627451s" repeatCount="indefinite" attributeName="opacity"></animate>
        </circle><circle stroke-width="2" stroke="#ae7aff" fill="none" r="0" cy="50" cx="50">
                <animate begin="-0.49019607843137253s" calcMode="spline" keySplines="0 0.2 0.8 1" keyTimes="0;1" values="0;37" dur="0.9803921568627451s" repeatCount="indefinite" attributeName="r"></animate>
                <animate begin="-0.49019607843137253s" calcMode="spline" keySplines="0.2 0 0.8 1" keyTimes="0;1" values="1;0" dur="0.9803921568627451s" repeatCount="indefinite" attributeName="opacity"></animate>
            </circle><g></g></g></svg>
    ),
    thinLoading: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
            width="200" height="200" style="shape-rendering: auto; display: block; background: transparent;"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <g>
                <path stroke="none" fill="#ae7aff" d="M10 50A40 40 0 0 0 90 50A40 42.5 0 0 1 10 50">
                    <animateTransform values="0 50 51.25;360 50 51.25" keyTimes="0;1" repeatCount="indefinite"
                        dur="1s" type="rotate" attributeName="transform"></animateTransform>
                </path>
                <g></g>
            </g>
        </svg>
    )

}