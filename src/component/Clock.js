import React, { Fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="my-10">
        <section className=" mx-auto ">
          <div className="border border-yellow-300 rounded shadow flex justify-evenly mx-auto w-[350px] h-[100px] items-center">

            <section>
              <p className="text-2xl text-center font-semibold text-cyan-600">{timerDays}</p>
              <small className="text-pink-500 text-xl">Days</small>
            </section>

            <span className="font-bold">:</span>

            <section>
              <p className="text-2xl text-center font-semibold text-cyan-600">{timerHours}</p>
              <small className="text-pink-500 text-xl">Hours</small>
            </section>{" "}

            <span className="font-bold">:</span>

            <section>
              <p className="text-2xl text-center font-semibold text-cyan-600">{timerMinutes}</p>
              <small className="text-pink-500 text-xl">Minutes</small>
            </section>{" "}

            <span className="font-bold">:</span>

            <section>
              <p className="text-2xl text-center font-semibold text-cyan-600">{timerSeconds}</p>
              <small className="text-pink-500 text-xl">Seconds</small>
            </section>

          </div>
        </section>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;