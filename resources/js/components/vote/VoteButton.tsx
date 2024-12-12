import React from 'react';
import { useContext, useEffect, useState } from 'react';
import Button from '@/components/_elements/Button';
import requester from '@/api/requester';
import { showToast } from '@/lib/showToast';
import { ParamsContext } from '@/contexts/ParamsProvider';
import VoteCounter from '@/components/_elements/VoteCounter';
import { Project } from '@/types';

function VoteButton({ project }: { project: Project }) {
  const context = useContext(ParamsContext);
  if (!context) {
    throw new Error('ParamsContext must be used within a ParamsProvider');
  }
  const { voteIdentifier, setLoading } = context;

  const [votesCount, setVotesCount] = useState(project.votes.length);
  const [processing, setProcessing] = useState(false);
  const [isVoted, setIsVoted] = useState(false);

  useEffect(() => {
    setIsVoted(!!project.votes.find((vote) => vote.hash === voteIdentifier));
  }, []);

  const voteCreate = async () => {
    setProcessing(true);
    setLoading(true);
    try {
      requester
        .post('/vote', {
          project_id: project.id,
          hash: voteIdentifier,
        })
        .then((data) => {
          showToast('success', <span>Vote counted</span>);
          setProcessing(false);
          setIsVoted(!isVoted);
          setVotesCount(votesCount + 1);
          setLoading(false);
        });
    } catch (err) {
      showToast('warning', <span>Something wrong.</span>);
      setLoading(false);
    }
  };

  const voteRemove = async () => {
    setLoading(true);
    setProcessing(true);
    try {
      await requester
        .post('/unvote', {
          project_id: project.id,
          hash: voteIdentifier,
        })
        .then(() => {
          showToast('warning', <span>Vote canceled</span>);
          setProcessing(false);
          setIsVoted(!isVoted);
          setVotesCount(votesCount - 1);
          setLoading(false);
        });
    } catch (err) {
      showToast('warning', <span>Something wrong.</span>);
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col md:flex-row items-center'>
      <div className='w-full md:w-6/12'>
        {isVoted ? (
          <Button
            className='bg-gray-500'
            disabled={processing}
            onClick={voteRemove}>
            Спасибо
          </Button>
        ) : (
          <Button className='bg-primary text-white' onClick={voteCreate}>
            Vote
          </Button>
        )}
      </div>
      <div className='w-full md:w-6/12 text-center'>
        <VoteCounter
          className='text-sm'
          count={votesCount}
          total={project.target_votes}
          dark={true}
        />
      </div>
    </div>
  );
}

export default VoteButton;
