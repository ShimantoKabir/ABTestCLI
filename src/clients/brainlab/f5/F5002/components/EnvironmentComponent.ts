import { TestInfo } from "../common/test.info";

const EnvironmentComponent = () => {
  const htmlStr = `
    <div class="${TestInfo.ID.toString()}__environment-container" >
      <h3>Purchase, license, subscribe, or try F5 in your environment.</h3>
      <p>Whether you're looking for hardware, software, or cloud solutions—or a combo of the three—F5 has you covered. F5 offers products and services in a variety of deployment options to meet your organization's unique set of needs.</p>
    </div>`;
  return htmlStr.trim();
};

export default EnvironmentComponent;
