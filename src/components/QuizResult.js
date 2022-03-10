function QuizResult({ result, retry }) {
    return (
        <div className="result-screen">
            <h2>Result: {result.percentage}% </h2>
            <p>Selected <b>{result.correct}</b> correct options out of <b>{result.total}</b> questions. </p>
            <button className="glow-on-hover" onClick={retry}>Retry</button>
        </div>

    )




}
export default QuizResult;