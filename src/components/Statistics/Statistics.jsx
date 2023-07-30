import PropTypes from "prop-types";

export const Statistics = (title, stats) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id}>
              <span class="label">{label}</span>
              <span class="label">{percentage} %</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.prototype = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
